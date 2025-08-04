const styleProp = { overflowWrap: 'break-word', hyphens: 'auto' };

const Title = ({ title }) => {
  return <h2 style={styleProp}>{title}</h2>;
};

export default Title;
