import { Brand } from '../components';

export default {
  title: 'icons/Brand',
  component: Brand,
  // argTypes: Brand.propTypes
}

const Template = (args) => <Brand {...args} />

export const BigIconBrand = Template.bind({});

BigIconBrand.args = {
  width: '100',
  height: '73',
  className: ''
}
export const SmallIconBrand = Template.bind({});

BigIconBrand.args = {
  width: '53',
  height: '38',
  className: ''
}