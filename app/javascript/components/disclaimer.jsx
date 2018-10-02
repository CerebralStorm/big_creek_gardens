import React from 'react'
import Modal from 'react-bootstrap4-modal';

class Disclaimer extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
      show: false
    }
  }

  toggleModal(event) {
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      <span className='link nav-link'>
        <span onClick={this.toggleModal}>Disclaimer</span>
        <Modal visible={this.state.show} onClickBackdrop={this.toggleModal}>
           <div className="modal-header">
             <h5 className="modal-title">Disclaimer</h5>
           </div>
           <div className="modal-body">
             <p>Notice to law enforcement authorities: What is contained on this page might look like marijuana, but it is actually legal industrial hemp flower grown in compliance with the Agricultural Act of 2014, 7 U.S.C. §5940 (2014 Farm Bill), pursuant to pilot programs lawfully established under 7 U.S.C. §5940 in conformance with California Food and Agricultural Code, Division 24, §81001, et seq., and Nevada Revised Statutes §557.010, et seq. California’s and Nevada’s respective Departments of Agriculture have certified, registered, and regulated the growing of our industrial hemp in conformance with federal and state laws, rules, and regulations. Federal law, in particular, 7 U.S.C. §5940(b)(1), entitled “Legitimacy of Industrial Hemp Research,” encourages growing, cultivating, and marketing industrial hemp products pursuant to these pilot programs, and by the rights and protections thereby established, CBDHemp.direct proudly offers this legal industrial hemp flower high in cannabidiol (CBD) in the United States.</p>
             <p>According to 7 U.S.C. §5940, the term “industrial hemp” means the plant Cannabis sativa L. and any part of such plant, whether growing or not, with a Delta-9 tetrahydrocannabinol (Delta-9 THC) concentration of not more than 0.3% on a dry weight basis. Only the Delta-9 THC level is relevant, not THC-A. As shown by the enclosed Certificate of Analysis, this hemp flower has a Delta-9 THC level on a dry weight basis equal to 0%, well below the 0.3% maximum level and, therefore, this flower is hemp, not marijuana, and is perfectly legal to possess and sell. This right applies in any state pursuant to the Full Faith and Credit Clause, Article VI, Section 1 of the Constitution, the Supremacy Clause, Article VI, Section 2 of the Constitution, and the Equal Protection Clause, Section 1 of the Fourteenth Amendment.</p>
           </div>
           <div className="modal-footer">
             <button type="button" className="btn btn-secondary" onClick={this.toggleModal}>
               Close
             </button>
           </div>
        </Modal>
      </span>
    );
  }
}

export default Disclaimer
export { Disclaimer };