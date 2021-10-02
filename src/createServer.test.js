const createServer = require('./createServer');
 
describe('Hapi Server', () => {
 it('should response 200 with payload value "Hello World" when GET /hello', async () => {
   // Arrange
   const server = createServer();
 
   // Action
   const response = await server.inject({
     method: 'GET',
     url: '/hello',
   });
 
   // Assert
   const responseJson = JSON.parse(response.payload);
   expect(response.statusCode).toEqual(200);
   expect(responseJson.value).toEqual('Hello World');
 });
 
 it('should response 200 with payload value "Hello john" when GET /hello/john', async () => {
   // Arrange
   const server = createServer();
 
   // Action
   const response = await server.inject({
     method: 'GET',
     url: '/hello/john',
   });
 
   // Assert
   const responseJson = JSON.parse(response.payload);
   expect(response.statusCode).toEqual(200);
   expect(responseJson.value).toEqual('Hello john');
 });
});
 
/** 
 output:
 PASS  src/createServer.test.js
  Hapi Server
    ✓ should response 200 with payload value "Hello World" when GET /hello (96 ms)
    ✓ should response 200 with payload value "Hello john" when GET /hello/john (12 ms)
*/