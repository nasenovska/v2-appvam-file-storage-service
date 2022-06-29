const File = require('../models/File');

class FileService {
  async getAll() {
    return await File.find();
  }

  async removeById(id) {
    const file = await File.findById(id);

    await file.remove();
  }

  async store({ originalname: name, size, key, location: url = '' }) {
    const file = await File.create({
      name,
      size,
      key,
      url,
    });

    return file;
  }
}

module.exports = new FileService();
