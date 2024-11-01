const multer = require("multer");
const path = require('path');
const fs = require('fs').promises;

async function ensureUploadsDirectory() {
    try {
        await fs.mkdir(path.join(__dirname, 'uploads'), { recursive: true });
    } catch (error) {
        console.error("Error creating uploads directory:", error);
    }
}

ensureUploadsDirectory();

const storage = multer.diskStorage({
    destination: path.join('C:', 'Users', 'sa492', 'Downloads', 'playground', 'File_Download_Upload', 'uploads'), // Your specific directory path
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`);
    }
  });

const upload = multer({ storage }); // Create uploads directory if it doesn't exist 
module.exports = {
    fileUpload: (req,res)=>{
        (upload.single('file')(req, res, (err) => {
            if (err) {
                return res.status(500).send('File upload failed.');
            }
            res.send('File uploaded successfully.');
    }))
},
    fileDownload: (req,res)=>{
    const filename = req.params.filename; 
    const filePath = path.join('C:', 'Users', 'sa492', 'Downloads', 'playground', 'File_Download_Upload', 'uploads',filename);
    res.download(filePath, (err) => { 
        if (err) { res.status(404).send('File not found.'); } 
    }
    );
    },
    //end
}