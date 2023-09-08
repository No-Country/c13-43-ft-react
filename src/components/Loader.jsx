import ClipLoader from "react-spinners/ClipLoader";
const Loader = (active) => {
  return (
    active.active && (
      <div className="absolute h-full w-full backdrop-blur-xl z-20 grid place-items-center top-0 left-0 right-0 bottom-0">
        <ClipLoader color="#6009AE" />
      </div>
    )
  );
};
export default Loader;
