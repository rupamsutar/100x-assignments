let num = 0;

const counter = async () => {
  const cn = () => {
    return setTimeout(() => {
      num++;
      console.log(num);

      cn();
    }, 1000);
  };

  cn();
};

counter();
