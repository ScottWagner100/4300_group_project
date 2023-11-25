const express = require('express');
const bcryptjs = require('bcryptjs');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/User');

// signup route
userRouter.post('/signup', async (req, res) => {
    try {
        const { email, password, confirmPassword, username } = req.body;
        if (!email || !password || !confirmPassword || !username ) {
            return res.status(400).json({ msg: 'please enter all fields' });
        }
        if (password.length < 6) {
            return res
            .status(400)
            .json({ msg: 'password should be atleast 6 characters' });
        }
        if (confirmPassword !== password) {
            return res.status(400).json({ msg: 'passwords must match' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res
            .status(400)
            .json({ msg: 'email already in use' });
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({ email, password: hashedPassword, username });

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// login route
userRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: 'please enter all fields' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res
            .status(400)
            .send({ msg: 'email not found' });
        }
        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send({ msg: 'incorrect password' });
        }
        const token = jwt.sign({ id: user._id }, 'passwordKey');
        res.json({ token, user: { id: user._id, username: user.username } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// check if token is valid
userRouter.post('/tokenIsValid', async (req, res) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) return res.json(false);
        const verified = jwt.verify(token, 'passwordKey');
        if (!verified) return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

userRouter.get('/', auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
        username: user.username,
        id: user._id,
    });
});

module.exports = userRouter;