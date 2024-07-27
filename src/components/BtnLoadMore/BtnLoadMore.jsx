const BtnLoadMore = ({onClick}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-[#3470FF] leading-6 font-medium underline hover:text-[#0B44CD] mx-auto block"
    >
      Load More
    </button>
  );
};
export default BtnLoadMore;
