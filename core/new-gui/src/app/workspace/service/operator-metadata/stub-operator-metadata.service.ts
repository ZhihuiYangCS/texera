import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { mockOperatorMetaData } from './mock-operator-metadata.data';
import { OperatorMetadata } from '../../types/operator-schema.interface';

import { shareReplay } from 'rxjs/operators';

@Injectable()
export class StubOperatorMetadataService {

  private operatorMetadataObservable = of(mockOperatorMetaData).pipe(
    shareReplay(1));

  constructor() { }

  public getOperatorMetadata(): Observable<OperatorMetadata> {
    return this.operatorMetadataObservable;
  }

  public operatorTypeExists(operatorType: string): boolean {
    const operator = mockOperatorMetaData.operators.filter(op => op.operatorType === operatorType);
    if (operator.length === 0) {
      return false;
    }
    return true;
  }

}
