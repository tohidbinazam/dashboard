// Function to remove empty fields from an object
const removeEmptyKey = (obj) => {
  for (const key of Object.keys(obj)) {
    if (obj[key] === '') {
      delete obj[key];
    }
  }
  return obj;
};

export default removeEmptyKey;
