
const Form = ({ block }) => (<section className="grid-container usa-section">
  <div className="grid-row grid-gap">
    <div className="tablet:grid-col-8 usa-prose">
      <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
        {block.title}
      </h2>
      <section id="request_form">
        <iframe className="airtable-embed airtable-dynamic-height" src={`https://airtable.com/embed/${block.body}`} frameBorder="0" onmousewheel="" width="100%" height="2316" />
      </section>
    </div>
  </div>
</section>);


export default Form;