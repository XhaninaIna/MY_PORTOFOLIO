import "./Projects.css";
export default function Projects() {
  return (
    <section className="projects" id="projectSection">
      <p>PROJECTS</p>
      <FilterButtons />
      <MyProjects />
    </section>
  );
}

function FilterButtons() {
  return (
    <div class="filter_buttons">
      <button class="filter_btn" data-filter="all">
        All
      </button>
      <button class="filter_btn" data-filter="web-development">
        Web Development
      </button>
      <button class="filter_btn" data-filter="design">
        Web Design
      </button>
    </div>
  );
}
function MyProjects() {
  return (
    <div className="myprojects">
      <ProjectBox_1 />
      <ProjectBox_2 />
      <ProjectBox_3 />
      <ProjectBox_4 />
      <ProjectBox_5 />
      <ProjectBox_6 />
    </div>
  );
}
function ProjectBox_1() {
  return (
    <div className="box" data-category="web-development">
      <img src="images/shoppingcart_img.jpg" alt="project photo" />
      <p className="title">Shopping Cart App</p>
      <p>
        Users can browse through a variety of products, add their favorites to
        the cart, and adjust quantities as needed. The app provides a clear view
        of the total price in real-time and allows users to securely complete
        their purchase with just a few clicks
      </p>
      <a href="#">View Demo</a>
    </div>
  );
}
function ProjectBox_2() {
  return (
    <div class="box" data-category="design">
      <img src="images/real_estate.jpg" alt="project photo" />
      <p class="title">Real Estate App</p>
      <p>
        Browse a wide selection of products, add items to your cart, and easily
        adjust quantities with a few taps. The app provides a smooth and fast
        checkout process, complete with secure payment options.
      </p>
      <a href="#" class="demo">
        View Demo
      </a>
    </div>
  );
}
function ProjectBox_3() {
  return (
    <div class="box" data-category="web-development">
      <img src="images/popcorn.png" alt="project photo" />
      <p class="title">UsePopCorn App</p>
      <p>
        Popcorn Movie App is your go-to platform for discovering and enjoying
        movies. Browse through a vast collection of films, read detailed
        descriptions, and watch trailers to find your next favorite movie.
      </p>
      <a href="#">View Demo</a>
    </div>
  );
}

function ProjectBox_4() {
  return (
    <div class="box" data-category="design">
      <img src="images/travel_list.jpg" alt="project photo" />
      <p class="title">Travel Bucket App</p>
      <p>
        The Travel List App helps you plan and organize your trips with ease.
        Create detailed packing lists, set reminders, and track your to-dos to
        ensure you’re fully prepared for your next adventure. The app allows you
        to customize your lists based on your destination, activities, and
        personal preferences. With a simple and intuitive design
      </p>
      <a href="#">View Demo</a>
    </div>
  );
}
function ProjectBox_5() {
  return (
    <div class="box" data-category="design">
      <img src="images/restaurant_app.png" alt="project photo" />
      <p class="title">Burger App</p>
      <p>
        The Burger App is your ultimate guide to creating the perfect burger.
        Whether you're craving a classic or something more adventurous, you can
        customize your burger just the way you like it. Choose from a variety of
        ingredients, including different types of buns, patties.
      </p>
      <a href="#">View Demo</a>
    </div>
  );
}
function ProjectBox_6() {
  return (
    <div class="box" data-category="web-development">
      <img src="images/bakery.jpeg" alt="project photo" />
      <p class="title">Bakery App</p>
      <p>
        "The Bakery App brings the joy of freshly baked goods right to your
        fingertips. Browse through a wide variety of delicious pastries, cakes,
        breads, and more, all crafted by skilled bakers. Whether you're looking
        for a sweet treat or a special occasion cake, the app lets you easily
        place an order, customize your selections
      </p>
      <a href="#">View Demo</a>
    </div>
  );
}
