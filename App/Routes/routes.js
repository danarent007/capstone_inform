
export const routes = {
 LOGIN_URL : 'http://ec2-35-178-179-48.eu-west-2.compute.amazonaws.com:3000/api/users/login',
 LOCATION_FETCH_URL : 'http://ec2-35-178-179-48.eu-west-2.compute.amazonaws.com:3000/api/userLocations',
 POST_FETCH_URL : 'http://ec2-35-178-179-48.eu-west-2.compute.amazonaws.com:3000/api/posts', //URL for fetching posts.
 REPORT_URL : 'http://ec2-35-178-179-48.eu-west-2.compute.amazonaws.com:3000/api/flagPost', //API flag post url
 DELETE_URL : 'http://ec2-35-178-179-48.eu-west-2.compute.amazonaws.com:3000/api/posts/delete',
 LOC_FETCH_URL : "http://ec2-35-178-179-48.eu-west-2.compute.amazonaws.com:3000/api/locations",
 LOC_SET_URL : "http://ec2-35-178-179-48.eu-west-2.compute.amazonaws.com:3000/api/setlocations",
 EVENT_FETCH_URL : 'http://ec2-35-178-179-48.eu-west-2.compute.amazonaws.com:3000/api/userEvents', //URL for fetching events.
 POST_URL : 'http://ec2-35-178-179-48.eu-west-2.compute.amazonaws.com:3000/api/posts', //API post get url
 ADD_URL : 'http://ec2-35-178-179-48.eu-west-2.compute.amazonaws.com:3000/api/posts/add', //API post add url
 UPLOAD_URL : 'http://ec2-35-178-179-48.eu-west-2.compute.amazonaws.com:3000/api/upload', //Upload url
 EVENT_UPLOAD_URL : 'http://ec2-35-178-179-48.eu-west-2.compute.amazonaws.com:3000/api/events/add',
 REGISTER_URL: 'http://ec2-35-178-179-48.eu-west-2.compute.amazonaws.com:3000/api/users/register'
}
export default routes;