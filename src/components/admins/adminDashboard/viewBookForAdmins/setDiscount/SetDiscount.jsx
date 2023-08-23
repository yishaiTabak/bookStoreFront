import React from "react";

const SetDiscount = ({bookDetails, onDiscount}) => (
    <div className="set-discount-container">
        <form className="set-discount" onSubmit={onDiscount}>
        <input type="number" placeholder="in %" max={99} min={0} />
        <button type="submit">set discount</button>
        </form>
        {bookDetails.discount !== 0 && (
        <div className="current-discount">
            current discount: {bookDetails.discount}%
        </div>
        )}
    </div>
)

export default SetDiscount