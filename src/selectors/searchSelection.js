export default (files, text) => {
  text = text.trim().toLowerCase();
  return files.filter(file =>
      file.link.toLowerCase().includes(text) || file.fileName.trim().toLowerCase().includes(text)
  )
};