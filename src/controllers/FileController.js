const FileService = require('../services/FileService');

class FileController {
  async store(req, res) {
    const file = await FileService.store(req.file);

    return res.json(file);
  }

  async remove(req, res) {
    const { id } = req.params;

    await FileService.removeById(id);

    return res.send();
  }

  async index(req, res) {
    const files = await FileService.getAll();

    return res.json(files);
  }
}

module.exports = new FileController();
