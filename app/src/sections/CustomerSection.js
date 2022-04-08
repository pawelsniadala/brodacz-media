import ReactImageAppear from "react-image-appear";
import SectionHeader from "../components/SectionHeader";
import { customer } from "../data/customer";

const CustomerSection = () => (
    <section className="recommendation-section">
        <div className="container">
            <div className="section-wrapper">
                <SectionHeader header="" />
                <div className="card-wrapper customer">
                    {customer.length && customer.map(item => (
                        <div key={item.id} className="card customer">
                            <ReactImageAppear
                                src={item.image}
                                className="card-img"
                                placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
                                showLoader={false}
                                alt={item.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default CustomerSection;
