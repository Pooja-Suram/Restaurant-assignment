import UserButton from ".";

export default{
    title: 'Atoms/UserButton',
    component: UserButton
};

const Template = args => <UserButton {...args} />

export const LogInButton = Template.bind();
LogInButton.args={
    login: true,
};

export const LogoutButton = Template.bind();