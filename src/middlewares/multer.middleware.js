import multer from "multer";
import {vs as uuid} from 'uuid'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, `${uuid()}-${file.originalname}`);
  },
});


export const upload = multer({
    storage
})