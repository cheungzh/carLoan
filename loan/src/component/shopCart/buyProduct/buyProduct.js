import React from 'react';
export default function buyControl(props) {
  return (
    <section className="buy-control">
      <form className="buy-form">
        <div className="buy-checkall">
          <input type="checkbox" name="checkAll" id="checkAll" onChange={props.checkAll}/>
          <label htmlFor="checkAll" />
          <span>全选</span>
        </div>
        <article className="buy-account">
          <p className="buy-price">合计:
            <span>
              ¥{props.total || 0}
            </span>
          </p>
          <span className="buy-product" onClick={props.buyProduct}>结算</span>
        </article>
      </form>

    </section>
  )
}