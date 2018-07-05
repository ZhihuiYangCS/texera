import { TestBed, inject } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { OperatorMetadataService, EMPTY_OPERATOR_METADATA } from './operator-metadata.service';

import { Observable ,  of } from 'rxjs';

import { mockOperatorMetaData } from './mock-operator-metadata.data';
import { delay, first, last } from 'rxjs/operators';


class StubHttpClient {
  constructor() { }

  // fake an async http response with a very small delay
  public get(url: string): Observable<any> {
    return of(mockOperatorMetaData).pipe(delay(1));
  }
}

describe('OperatorMetadataService', () => {

  let service: OperatorMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OperatorMetadataService,
        { provide: HttpClient, useClass: StubHttpClient }
      ]
    });
  });

  beforeEach(inject([OperatorMetadataService, HttpClient], (ser: OperatorMetadataService) => {
    service = ser;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit an empty operator metadata first', () => {
    service.getOperatorMetadata().pipe(first()).subscribe(
      value => expect(<any>value).toEqual(EMPTY_OPERATOR_METADATA)
    );
  });

  it('should send http request once', () => {
    service.getOperatorMetadata().pipe(last()).subscribe(
      value => expect(<any>value).toBeTruthy()
    );
  });

  it('should check if operatorType exists correctly', () => {
    service.getOperatorMetadata().pipe(last()).subscribe(
      () => {
        expect(service.operatorTypeExists('ScanSource')).toBeTruthy();
        expect(service.operatorTypeExists('InvalidOperatorType')).toBeFalsy();
      }
    );
  });

});
