const countryNameValidator = (value) => {
    return /^[^\d]*$/.test(value);

  };

  module.exports = countryNameValidator 