import { Injectable } from '@angular/core';
// import {
//   Stitch,
//   RemoteMongoClient,
//   AnonymousCredential
// } from 'mongodb-stitch-browser-sdk';
import { HomeownerFaq, TenantFaq } from '../interfaces/other.interface';

@Injectable()
export class PopulateService {
  // client = Stitch.initializeDefaultAppClient('covid19web-uwtgc');
  // db = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('nwkdash');

  // public getFaqs(type: 'Tenant' | 'Homeowners'): Promise<void | Array<HomeownerFaq | TenantFaq>> {
  //   return this.client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
  //     this.db.collection('faqs').find({Type: type})
  //   ).then(docs => {
  //     const docArray: Array<HomeownerFaq | TenantFaq> = [];
  //     docs.toArray().then(ds => ds.forEach(d => docArray.push(d as HomeownerFaq | TenantFaq)));
  //     console.log(docArray);
  //     return docArray;
  //   })
  //   .then(resp => resp)
  //   .catch(err => {
  //     console.error(err);
  //   });
  // }
}
