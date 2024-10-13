
const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and modern websites using the latest technologies.',
    icon: '🌐', // You can replace this with an icon from a library or an image
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile applications for both iOS and Android platforms.',
    icon: '📱',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces and enhancing user experiences.',
    icon: '🎨',
  },
  {
    id: 4,
    title: 'SEO Optimization',
    description: 'Improving your website’s visibility on search engines and driving traffic.',
    icon: '🔍',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-cards">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
