import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../../container/footer';
import Navbar from '../../../container/navbar';
import './style.scss';
import MetaTags from 'react-meta-tags';
const BlogId = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    const data = await Axios(
      ` https://email-contact.herokuapp.com/blog/post/${props.match.params.id}`,
    );
    setData(data.data.data[0]);
    setLoading(true);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='blog-post-wrapper'>
      <Navbar />
      {loading ? (
        <div className='post-wrapper'>
          <MetaTags>
            <title>{data.title}</title>
            <meta name='title' content={data.title} />
            <meta name='description' content={data.short} />

            <meta property='og:type' content='website' />
            <meta
              property='og:url'
              content={`https://bdbose.tech/blogs/${data.title.replace(
                ' ',
                '%20',
              )}`}
            />
            <meta property='og:title' content={data.title} />
            <meta property='og:description' content={data.short} />
            <meta
              property='og:image'
              content='https://bdbose.tech/bosecode.png'
            />

            <meta property='twitter:card' content='summary_large_image' />
            <meta
              property='twitter:url'
              content={`https://bdbose.tech/blogs/${data.title.replace(
                ' ',
                '%20',
              )}`}
            />
            <meta property='twitter:title' content={data.title} />
            <meta property='twitter:description' content={data.short} />
            <meta
              property='twitter:image'
              content='https://bdbose.tech/bosecode.png'
            />
            <meta name='keywords' content={data.tags.join()} />
          </MetaTags>
          <center>
            <h1>{data.title}</h1>
            <span
              style={{
                display: 'block',
                textAlign: 'right',
                width: '80vw',
                margin: '2vh 0',
              }}>
              ~ {data.time}
            </span>
            <img src={data.preview} alt={data.title} />
            <div
              style={{
                width: '80vw',
                fontSize: '20px',
                margin: '5vh 0',
              }}>
              {data.description}
            </div>
          </center>
        </div>
      ) : (
        'Loading...'
      )}
      <Footer />
    </div>
  );
};

export default BlogId;
