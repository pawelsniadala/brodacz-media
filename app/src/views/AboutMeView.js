// import { useEffect } from "react";
// import { aboutMe } from "../data/aboutMe";
// import PageHeader from "../components/PageHeader";
// import ReactImageAppear from "react-image-appear";

// const AboutMeView = () => {
//     useEffect(() => {
//         window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     }, []);

//     return (
//         <div className="about-me-view">
//             <div className="view-wrapper container">
//                 <PageHeader header="O mnie" />
//                 <section className="introduction-section">
//                     <div className="section-wrapper">
//                         {aboutMe.map(item => (
//                             <div className="card introduction" key={item.id}>
//                                 <div className="grid">
//                                     <div className="card-body">
//                                         <div className="card-title">
//                                             Cześć!
//                                         </div>
//                                         {/* <div className="card-subtitle">
//                                             kilka słów o mnie
//                                         </div> */}
//                                         <div className="card-text">
//                                             {item.description}
//                                         </div>
//                                         <div className="buton-wrapper">
//                                             <button type="button" className="button-card introduction">
//                                                 Zobacz reel
//                                             </button>
//                                             <button type="button" className="button-card introduction" style={{ backgroundColor: "#303134" }}>
//                                                 Napisz wiadomość
//                                             </button>
//                                         </div>
//                                     </div>
//                                     <div className="image-wrapper">
//                                         <ReactImageAppear
//                                             src={item.image}
//                                             className="card-img"
//                                             placeholderStyle={{ backgroundColor: "transparent", display: "inline" }}
//                                             showLoader={false}
//                                             alt="..."
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }

// export default AboutMeView;
