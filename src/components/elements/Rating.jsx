const Rating = ({ rate }) => {
  let rating = [];
  for (let i = 1; i <= 10; i++) {
    if (i <= rate) {
      rating.push(<i className="mr-2 fa-solid fa-star" key={i}></i>);
    } else {
      rating.push(<i className="mr-2 fa-regular fa-star" key={i}></i>);
    }
  }
  return <div className="mt-3 mr-2 text-yellow-500">{rating}</div>;
};

export default Rating;
