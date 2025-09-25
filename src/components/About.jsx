import backgroundTomato1 from "../images/background/bg_tomato1.jpg";
import "./about.css";

function About() {
  return (
    <div className="about " style={{ backgroundImage: `url(${backgroundTomato1})` }}>
      <h1 className="about-header">Tomato</h1>
      <div className="about-content">
        <p>
          The tomato (US: /təˈmeɪtoʊ/, UK: /təˈmɑːtoʊ/; Solanum lycopersicum) is a plant whose fruit
          is an edible berry that is eaten as a vegetable. The tomato is a member of the nightshade
          family that includes tobacco, potato, and chili peppers. It originated from western South
          America, and may have been domesticated there or in Mexico (Central America). It was
          introduced to the Old World by the Spanish in the Columbian exchange in the 16th century.
        </p>
        <p>
          Tomato plants are vines, largely annual and vulnerable to frost, though sometimes living
          longer in greenhouses. The flowers are able to self-fertilise. Modern varieties have been
          bred to ripen uniformly red, in a process that has impaired the fruit's sweetness and
          flavor. There are thousands of cultivars, varying in size, color, shape, and flavor.
        </p>
        <p>
          Tomatoes are attacked by many insect pests and nematodes, and are subject to diseases
          caused by viruses and by mildew and blight fungi. The tomato has a strong savoury umami
          flavor, and is an important ingredient in cuisines around the world.
        </p>
        <p>
          Tomatoes are widely used in sauces for pasta and pizza, in soups such as gazpacho and
          tomato soup, in salads and condiments like salsa and ketchup, and in various curries.
          Tomatoes are also consumed as juice and used in beverages such as the Bloody Mary
          cocktail.
        </p>
      </div>
      <a
        href="https://en.wikipedia.org/wiki/Tomato"
        target="_blank"
        rel="noopener noreferrer"
        className="about-learn-more"
      >
        Learn more about tomatoes
      </a>
    </div>
  );
}

export default About;
