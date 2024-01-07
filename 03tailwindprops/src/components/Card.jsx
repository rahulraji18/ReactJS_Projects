import PropTypes from "prop-types";

const Card = ({ username = "N/A", post = "Not assigned yet" }) => {
  return (
    <>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              voluptatum!
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div>{username}</div>
            <div>{post}</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

Card.propTypes = {
  username: PropTypes.string,
  post: PropTypes.string,
};

export default Card;
