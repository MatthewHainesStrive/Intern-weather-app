export interface SingleDayResp {
  weather: {
    main: string;
  };
  main: {
    temp_min: number;
    temp_max: number;
    temp: number;
  };
}
