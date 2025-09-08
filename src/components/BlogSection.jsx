const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      img: "/public/assets/coffee.jpg",
      date: "July 03, 2017",
      author: "FreshMeal",
      comments: 12,
      title: "Lorem Ipsum is simply dummy text of the printing",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more letters.",
    },
    {
      id: 2,
      img: "/public/assets/donut.jpg",
      date: "July 03, 2017",
      author: "FreshMeal",
      comments: 12,
      title: "Lorem Ipsum is simply dummy text of the printing",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more letters.",
    },
  ];

  return (
    <section className="top-padding bg-light" id="blog">
      <div className="container text-center">
        {/* Section Title */}
        <h4 className="heading mb-2">Latest News from Blog</h4>
        <img src="/public/icons/hr.svg" alt="divider" className="mb-5 img-fluid" />

        {/* Blog Cards */}
        <div className="row justify-content-center g-4">
          {blogPosts.map((post) => (
            <div className="col-lg-6" key={post.id}>
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={post.img}
                  className="card-img-top"
                  alt={post.title}
                  style={{ height: "380px", backgroundSize: "cover" }}
                />
                <div className="card-body text-start">
                  <div className="d-flex justify-content-between text-muted my-2">
                    <div>
                      <p>{post.date}</p>{" "}
                    </div>
                    <div className="d-flex">
                      <p>
                        Posted by
                        <span className="fw-bold me-4"> {post.author} </span>
                      </p>
                      <p>
                        <span className="fw-bold">{post.comments} </span>
                        Comments
                      </p>
                    </div>
                  </div>
                  <h5 className="fw-bold my-3">{post.title}</h5>
                  <p className="text-muted">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="btn btn-dark fw-bold px-3 py-2 mt-5 btn-hover-secondary">
          View More
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
