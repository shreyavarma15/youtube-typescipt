type CommnetProps = {
  data: {
    name: String;
    text: String;
  };
};

const Comment = (props: CommnetProps) => {
  const { name, text } = props.data;
  return (
    <div className="py-3 my-4 ml-4 shadow-md rounded-lg">
      <div className="flex">
        <img
          alt="user"
          className="h-8"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AnQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBBAUCA//EADwQAAEEAQICBgYGCgMAAAAAAAABAgMEBQYRByESMUFRYXETIjKBkbFSkqHC0dIIIyQzNEeissHhFBUW/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYVUTmqnIu6q09Ql9FdzmNgk+hJaYi/DcDsA08flsdkmdPHX61pvfBK1/wAlNvdO8DIAAAAAAAAAAAAAAAAAAHPzuYpYHFz5LJzJFWgbu5y9a9yInaq9x0CoeJSS6t4g4XRbXubQjalu70V6+v7qf1AadeLV3FiV9iSzJg9MdJUjjj9udE+HS7efUncpJqXBjRcEKMnpWLT0TnJLZeir9VUQn9WvDVrx168bYoYmoxjGJsjUTqRD6gVZluDGJTazpe9bxF5nON7ZXPbv8eknuU86Q1tmcPnWaU1+1rLj9kqX+XQm7kVeSLv2L38lLVIPxc0xHqLSdmSNn7fQatirI32kVqbq33p9uwE3RdzJE+F+fk1HovH37C72WtWGZe9zF2396bL7yWAAAAAAAAAAAAAAAAACpcRvH+kJl/T9b8f+q37ujH+Di2l6ipOLMFnTeqMNrujE6SOsqV7rG9rF32VfNHKnnsBbaA08VkqmWoQXsfM2atOxHMe1ez8TcAGvfcxtKw6RfUSJyu8tlNgrrjJqluJwDsNQVZctlU9BFDHze1juSu26+fUnioGl+ju16aJsq7foOvPVnl0Wp89y0iOcPtPrpnSVDFv2WaNivmVO2Ryqrvnt7iRgAAAAAAAAAAAAAAAADWyFKtkKc1O7CyavM1WSRvTdHIp8sxl6GFoyXspajrVo/akkXbyRO9fBCt5+Mn/OnfFpXTORyqNXb0uytavwRVT37AaL9M6w4cXJbOj1XL4SRyufj5Ob4/JP8t96G5X43UYWpHmcBlaVlPajRqOTfw36K/YYXiTrRf5e2/rv/IeH8RNYSfvOHNh+30lev3AMWOKmdz29XRWlbkkruSWbSeqzx29n4uOvoXh7Yo5NdR6tuf8AY52Tm1VXdkHl3r1805J2HLTiPrNqIjeHlpETqRHv/IZTiZq+P1puH1xGJ19F79/7ALYRETqMle6Z4t4LMXEx9+OfE31cjUitps1Xd3S7F80QsFF3RFAyAAAAAAAAAAAAAHiV7Y43Pe5Gtam7lXsQ9nC1y22/R2ZZj45JLT6cjY2xpu5VVqpy8QKwxdKbi5q2zk8m5/8A5nGSrFWroqoky/7TZV80QuSjSrY+syrSgjgrxp0WRxNRrWp5IRbhLiJMPoLGV7FeSvYc10srJG9FyOc5V5p5bExAAAAAAIzrXReK1dj3w34Gtso1fQ22p68a9nPtTwIpwlzuSrZC/orUb+lfxf8ADyKvOSJPmiIrVTwXwLR2Ky1Fh78XGfT+YoU53V5a7o7UzGKrE2RyesvUnJU6+4CzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q=="
        />
        <p>@{name}</p>
      </div>
      <div className="ml-5">{text}</div>
    </div>
  );
};

export default Comment;
