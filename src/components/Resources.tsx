import React from "react";
import "../styles/ResourceCard.css";

interface ResourceProps {
  resource: {
    category: string;
    title: string;
    author: string;
    imageUrl: string;
    link: string;
  };
}

const Resources: React.FC<ResourceProps> = ({ resource }) => {
  // Define a list of URLs that should have a different background size
  const specialBackgroundUrls = [
    "https://i.ibb.co/M157p6z/image.png",
    "https://i.ibb.co/NmdfXRP/image.png",
  ];

  // Determine the background size based on the image URL
  const backgroundSize = specialBackgroundUrls.includes(resource.imageUrl)
    ? "90%"
    : "50%"; // Default size for other images

  return (
    <>
      <div
        className="resource-card"
        style={{
          backgroundImage: `url(${resource.imageUrl})`,
          backgroundSize: backgroundSize,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      >
        <div className="resource-category">{resource.category}</div>
        <h4>{resource.title}</h4>
        <p>By {resource.author}</p>
        <a href={resource.link} className="view-resource">
          View Resource →
        </a>
      </div>
    </>
  );
};

export default Resources;
