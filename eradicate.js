const eradicate = (x) => {
  ///fun to delate nodelist/array
  x.forEach((el) => {
    el.remove();
  });
};

export default eradicate;
