import Labeled_Photo from "./Labeled_Photo";
import brandon_photo from '../resources/BrandonPhoto.png';
import scott_photo from '../resources/ScottPhoto.png';
import thomas_photo from '../resources/ThomasPhoto.png';
import cole_photo from '../resources/ColePhoto.png';

export default function StaffPhotos() {

    return (
        <div className="staff_photos">
        <Labeled_Photo photo={brandon_photo} photo_text='Brandon Barth' />
        <Labeled_Photo photo={scott_photo} photo_text='Scott Wagner' />
        <Labeled_Photo photo={thomas_photo} photo_text='Thomas Henderson' />
        <Labeled_Photo photo={cole_photo} photo_text='Cole Lanham' />
    </div>
    );
}