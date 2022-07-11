import propTypes from "prop-types";

export default function TopUpItem(props) {
  const { type, data, isLoading } = props;

  if (type === "desktop") {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">{data?.voucher?.name}</h2>
        <p className="text-lg color-palette-2 mb-0">{isLoading ? "" : `Category: ${data?.voucher?.category.name}`}</p>
      </div>
    );
  }

  return (
    <>
      {isLoading && <i>Loading...</i>}
      <div className="row align-items-center">
        <div className="col-md-12 col-4">
          <img src={`https://bwamern-storegg-backend.herokuapp.com/uploads/${data?.voucher?.thumbnail}`} width="280" height="380" className="img-fluid" alt="" />
        </div>

        <div className="col-md-12 col-8 d-md-none d-block">
          <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">{data?.voucher?.name}</h2>
          <p className="text-sm color-palette-2 text-start mb-0">{isLoading ? "" : `Category: ${data?.voucher?.category.name}`}</p>
        </div>
      </div>
    </>
  );
}

TopUpItem.propTypes = {
  type: propTypes.oneOf(["desktop", "mobile"]),
};
