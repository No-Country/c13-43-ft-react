import ClipLoader from "react-spinners/ClipLoader";
const Loader = (active) => {
  return (
    active.active && (
      <div className="absolute h-full w-full backdrop-blur-xl z-10 grid place-items-center top-0">
        <ClipLoader color="#6009AE" />
      </div>
    )
  );
};
export default Loader;
