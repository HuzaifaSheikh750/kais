import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRequest } from "@/redux/blog/actions";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Contact1 = () => {
  const editor = useRef(null);

  const charAnim = useRef();
  const wordAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = e.target.value.trim();
      if (newTag) {
        setFieldValue("tags", [...values.tags, newTag]);
        setFieldValue("tag", "");
      }
    }
  };

  const handleTagRemove = (index) => {
    const newTags = [...values.tags];
    newTags.splice(index, 1);
    setFieldValue("tags", newTags);
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    thumbnail_image: Yup.string().required("Required"),
    background_image : Yup.string().required("Required"),
    published_date: Yup.string().required("Required"),
    content: Yup.string().required("Required"),
    tags: Yup.array()
      .min(1, "At least one tag is required")
      .of(Yup.string().trim().required("Tag cannot be empty")),
    category: Yup.string().required("Required"),
    written_by: Yup.string().required("Required"),
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      thumbnail_image: "",
      background_image : "",
      published_date: "",
      category: "",
      content: "",
      tags: [],
      written_by: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      const data = {
        title: values.title,
        thumbnail_image: values.thumbnail_image,
        background_image : values.background_image,
        published_date: values.published_date,
        category: values.category,
        content: values.content,
        tags: values.tags,
        written_by: values.written_by,
      };

      console.log("values", data);
    },
  });

  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Let’s get in touch
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  Great! We are excited to hear from you and lets start
                  something special togerter. call us for any inquery.
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="contact__form">
                <form onSubmit={handleSubmit} encType="multipart/form-data"> 


                  <div className="row g-3">

                    <div className="col-xxl-4 col-xl-4 col-12">
                      <input
                        type="text"
                        name="title"
                        placeholder="Title *"
                        value={values.title}
                        onChange={handleChange}
                      />
                      {touched.title && errors.title ? (
                        <div
                          className="error"
                          style={{ marginTop: "-30px", color: "red" }}
                        >
                          {errors.title}
                        </div>
                      ) : null}
                    </div>
                 
                    <div className="col-xxl-4 col-xl-4 col-12">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        style={{ height: "50px" }}
                        name="category"
                        onChange={handleChange}
                      >
                        {/* <option value="" disabled>
                          Select an option
                        </option> */}
                        <option value="" disabled selected>Select Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      {touched.category && errors.category ? (
                        <div
                          className="error"
                          style={{ marginTop: "10px", color: "red" }}
                        >
                          {errors.category}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-12">
                      <input
                        class="form-control"
                        id="selectedDate"
                        name="published_date"
                        placeholder="MM/DD/YYYY"
                        type="date"
                        value={values.published_date}
                        onChange={handleChange}
                      />
                      {touched.published_date && errors.published_date ? (
                        <div
                          className="error"
                          style={{ marginTop: "-30px", color: "red" }}
                        >
                          {errors.published_date}
                        </div>
                      ) : null}
                    </div>

                  </div>

                  <div className="row g-3" style={{ marginBottom: "30px", marginTop: "30px" }}>
                 
                      <div className="col-xxl-6 col-xl-6 col-12">
                      <label
                      for="formFile"
                      class="form-label"
                      style={{ marginBottom: "5px" }}
                    >
                       Thumbnail Image *
                    </label>
                      <input
                        type="file"
                        name="thumbnail_image"
                        placeholder="Upload Main Image *"
                        onChange={(e) => {
                          setFieldValue("thumbnail_image", e.target.files[0]);
                        }}
                      />
                      {touched.thumbnail_image && errors.thumbnail_image ? (
                        <div
                          className="error"
                          style={{ marginTop: "-30px", color: "red" }}
                        >
                          {errors.thumbnail_image}
                        </div>
                      ) : null}
                    </div>

                    

                    <div className="col-xxl-6 col-xl-6 col-12">
                    <label
                      for="formFile"
                      class="form-label"
                      style={{ marginBottom: "5px" }}
                    >
                       Background Image *
                    </label>
                      <input
                        type="file"
                        name="background_image"
                        placeholder="Upload Main Image *"
                        onChange={(e) => {
                          setFieldValue("background_image", e.target.files[0]);
                        }}
                      />
                      {touched.background_image && errors.background_image ? (
                        <div
                          className="error"
                          style={{ marginTop: "-30px", color: "red" }}
                        >
                          {errors.background_image}
                        </div>
                      ) : null}
                    </div>

                   


                  </div>

                  <div className="row g-4" >
                    <div className="col-12">
                      <JoditEditor
                     
                        ref={editor}
                        value={values.content}
                        onChange={(newContent) => {
                          handleChange({
                            target: {
                              name: 'content',
                              value: newContent,
                            },
                          });
                        }}
                      />
                        {touched.content && errors.content ? (
                        <div className="error" style={{ marginTop: "0px", color: "red" }}>{errors.content}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="row g-3" style={{ paddingTop: "50px" }}>

                    
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        placeholder="Enter Tags *"
                        value={values.tag}
                        name="tags"
                        onChange={(e) => {
                          setFieldValue("tag", e.target.value);
                        }}
                        onKeyDown={handleInputKeyDown}
                      />

                      <ul style={{ display: "flex", padding: "5px" }}>
                        {values.tags.map((tag, index) => (
                          <li
                            key={index}
                            style={{
                              border: "1px solid black",
                              margin: "5px",
                              borderRadius: "10px",
                              padding: "5px",
                              backgroundColor: "#f1f1f1",
                            }}
                          >
                            {tag}
                            <button onClick={() => handleTagRemove(index)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                class="bi bi-x"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M11.354 4.646a.5.5 0 0 1 0 .708L9.707 8l1.647 1.646a.5.5 0 1 1-.708.708L9 8.707l-1.646 1.647a.5.5 0 1 1-.708-.708L8.293 8 6.646 6.354a.5.5 0 0 1 .708-.708L9 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"
                                />
                              </svg>
                            </button>
                          </li>
                        ))}
                      </ul>
                      {touched.tags && errors.tags ? (
                        <div
                          className="error"
                          style={{ marginTop: "-30px", color: "red" }}
                        >
                          {errors.tags}
                        </div>
                      ) : null}
                    </div>


                    <div className="col-xxl-6 col-xl-6 col-12">
                      {/* <input
                        type="text"
                        name="written_by"
                        value={values.written_by}
                        onChange={handleChange}
                        placeholder="Written By *"
                      /> */}
                       <select
                        class="form-select"
                        aria-label="Default select example"
                        style={{ height: "50px" }}
                        name="written_by"
                        onChange={handleChange}
                      >
                        {/* <option value="" disabled>
                          Select an option
                        </option> */}
                        <option value="" disabled selected>Written By*</option>
                        <option value="adnan">Adnan Bhai</option>
                        <option value="sharyar">Sharyar Bhai</option>
                      </select>
                      {touched.written_by && errors.written_by ? (
                        <div
                          className="error"
                          style={{ marginTop: "10px", color: "red" }}
                        >
                          {errors.written_by}
                        </div>
                      ) : null}
                    </div>

                  </div>

                  <div className="row g-3">
                    <div className="col-12">
                      <div className="btn_wrapper">
                        <button
                          className="wc-btn-primary btn-hover btn-item"
                          type="submit"
                        >
                          <span></span> Post <br />
                          <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;