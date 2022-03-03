import * as vaLis from "../proto/va-lis_pb";
import * as vaLisGrpc from "../proto/va-lis_grpc_pb";
import { credentials } from "grpc";

async function runVaClient() {

    const client = new vaLisGrpc.SampleServiceClient(
        '192.168.10.127:5800',
        credentials.createInsecure()
      );

        var request = new vaLis.sample_id();
        request.setSampleId("3");
    
      console.log('request toObject:', request.toObject());
    
      // use request object to call grpc service
      client.sample_get_lab_tests(request, function (err, response) {
        if (err) {
          console.log('Get error from server:', err);
          return;
        }
        console.log('Get response from server:', response);
        console.log('Response toObject:', response.toObject());
        console.log('Response sample_id:', response.getSampleId());
        console.log('Response tests:', response.getTestsList());
    
      });
}

runVaClient();

module.exports = runVaClient;



//systematically learn a language
//publish package and then install, can learn through publishing anyting doesn't have to be grpc 
//make sure tutorial has example on how to use the published package 
//run through the workflow and document the process in readme
//use internal company feedback to improve whatever parts of the readme that need to be elaborated 
//can ask zichen to try to implement to see his feedback on client