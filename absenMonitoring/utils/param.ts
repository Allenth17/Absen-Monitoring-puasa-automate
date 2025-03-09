export abstract class Param {
  
    protected PARAM_COUNT: number;
    private code: number;
  
    constructor(
      code: number, 
      index: number, 
      columnValues: string[]
    ) {
      this.PARAM_COUNT = 0;
      this.code = code;
    }

    protected getParamValue(
      columnValues: string | { [key: string]: string }[]
    ) : any {
      if (typeof columnValues === 'string') {
        this.PARAM_COUNT++;
      } else {
        columnValues.forEach(item => {
          this.PARAM_COUNT += Object.keys(item).length;
        });
      }
      return columnValues;
    }
  
    public getParamCount() : number {
      return this.PARAM_COUNT;
    }
  
    public getCode() : number {
      return this.code;
    }
  
    public abstract toString() : string;
  }
  