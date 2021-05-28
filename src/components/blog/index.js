import React, { useEffect, useState } from 'react';
import './style.scss';
import Navbar from '../../container/navbar';
import Footer from '../../container/footer';
import ProjectCard from '../../container/project-cards';
import Axios from 'axios';
const Blog = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    const data = await Axios(' https://email-contact.herokuapp.com/blog/all');
    setData(data.data);
    setLoading(true);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='blog'>
      <Navbar />
      {loading ? (
        <div className='post-wrapper'>
          {data.data.map((i) => (
            <div style={{ margin: 'auto' }} key={i.title}>
              <ProjectCard
                data={{
                  url: i.preview,
                  title: i.title,
                  tech: i.short,
                  link: `https://bdbose.tech/blogs/${i.title}`,
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        'Loading...'
      )}

      <Footer />
    </div>
  );
};
export default Blog;
