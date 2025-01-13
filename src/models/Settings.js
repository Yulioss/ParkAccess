

export const DataType = {
    string: "String",
    int: "Int",
    decimal: "Decimal",
    dateTime: "DateTime",
  };

export const CreateSettingModel = {
  parameterName: String,
  parameterDescription:String,
  parameterValue:String,
  dataType:String,
  settingTypeId:Number
}

export const EditSettingModel = {
  id:Number,
  parameterName: String,
  parameterDescription:String,
  parameterValue:String,
  dataType:String,
  settingTypeId:Number
}

export const GetSettingModel = {
  id:Number,
  parameterName: String,
  parameterDescription:String,
  parameterValue:String,
  dataType:String,
  isActive:Boolean,
  settingTypeId:Number
}

export const DeleteSettingModel = {
  id:Number,
}

