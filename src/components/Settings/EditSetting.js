import React, { Component } from 'react';
import {DataType, EditSettingModel} from '../../models/Settings'
import ApiSettingType from '../../services/ApiSettingType';
import ApiSetting from '../../services/ApiSetting';
import { GetSettingTypeResponse } from '../../models/SettingsType';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useParams } from "react-router-dom";

function withParams(Component) {
  return function WrappedComponent(props) {
    const params = useParams();
    return <Component {...props} params={params} />;
  };
}
export class EditSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enumDataType: DataType.string,
            settingTypes:[GetSettingTypeResponse],
            settingType:GetSettingTypeResponse,
            parameterName:"",
            parameterValue:"",
            parameterDescription:"",
        };
        this.validations={
          parameterName:true,
          parameterValue:true,
          parameterDescription:true,
        }        
      }
  static displayName = EditSetting.name;

  async settingTypeData() {
    const api = new ApiSettingType();
    const response = await api.getSettingType();
    this.setState({settingTypes: response.body})    
  }

  async getSetting(id = Number) {
    const api = new ApiSetting();
    const response = await api.getSetting(id);
    if(response.status === 200)
    {
      const setting = response.body;
      const settingTypeId = this.state.settingTypes.find(({ id }) => id === setting.settingTypeId);
      this.setState({parameterName:setting.parameterName, parameterValue:setting.parameterValue, parameterDescription:setting.parameterDescription, enumDataType:setting.dataType, settingType:settingTypeId});
    }
      
  }


  async editSetting() {
    const api = new ApiSetting();
    const editSetting= EditSettingModel;
    editSetting.id = this.props.params.id;
    editSetting.parameterName = this.state.parameterName;
    editSetting.parameterValue = this.state.parameterValue;
    editSetting.parameterDescription = this.state.parameterDescription;
    editSetting.dataType = this.state.enumDataType;
    editSetting.settingTypeId = this.state.settingType.id;
    const response = await api.editSetting(editSetting);
    const MySwal = withReactContent(Swal) ;
    if(response.status !== 200 )
    {
      return MySwal.fire({
        title: response.status,
        text: response.body.message,
        icon: 'error',
      })
    }
    else
    {
      return MySwal.fire({
        title: response.status,
        text: response.body.message,
        icon: 'success',
      })
    }
  }


  componentDidMount() {
    this.settingTypeData();
    this.getSetting(this.props.params.id);
    
  }
  render() {  
    console.log(this.state);
    const handleChangeEnum = (event) => {
        this.setState({ enumDataType: event.target.value })
    };
    const handleChangeSettingType = (event) => {
        this.setState({ settingType: this.state.settingTypes.find((type) => { return type.id === Number(event.target.value)}) })
    };
    const handleChangeParameterName = (event) => {
      let regex = new RegExp("^[a-zA-Z0-9]{3,30}$");
      if (!event.target.value || !regex.test(event.target.value)) {
        this.validations.parameterName = false;
      }
      else{
        this.validations.parameterName = true;
      }
        this.setState({ parameterName: event.target.value })
    };
    const handleChangeParameterValue = (event) => {
        this.setState({ parameterValue: event.target.value })
    };
    const handleChangeParameterDescription = (event) => {
      let regex = new RegExp("^[a-zA-Z0-9\\s.]{3,30}$");
      if (!event.target.value || !regex.test(event.target.value)) {
        this.validations.parameterDescription = false;
      }
      else{
        this.validations.parameterDescription = true;
      }
        this.setState({ parameterDescription: event.target.value })
    };
    const handleSubmit = (event) => {  
        event.preventDefault();
        const validations = this.validations
        if (!validations.parameterName || !validations.parameterValue || !validations.parameterDescription) {
        return false
        }
        this.editSetting();
      }
    return (
        <section id="content" className="content">
        <div className="content__header content__boxed overlapping">
            <div className="content__wrap">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="./view-settings">Configuración</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Editar Configuración</li>
                    </ol>
                </nav>
                <h1 className="page-title mb-0 mt-2">Editar Configuración</h1>
                <p className="lead"></p>
            </div>
        </div>
        <div className="content__boxed">
          <div className="content__wrap">
            <article className="d-md-flex gap-4">
              <div className="flex-fill">
                <section id="boxed-layout-tips" className="card mb-4">
                    <div className="card-body">
                        <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                            <div className="col-md-6">
                                <label htmlFor="parameterName" className="form-label" >Nombre Parametro</label>
                                <input id="parameterName"  className={this.validations.parameterName ? 'form-control' : 'form-control is-invalid'} onChange={handleChangeParameterName} value={this.state.parameterName} required/>
                                {this.validations.parameterName === true &&
                                <div className="invalid-feedback" >
                                    Por favor proporciona un nombre valido.
                                </div>
                                }
                                {this.validations.parameterName === false &&
                                  <div className="invalid-feedback d-block" >
                                      El nombre debe tener entre 3 a 20 caracteres.
                                  </div>
                                }
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="parameterValue" className="form-label" >Valor Parametro</label>
                                <input id="parameterValue"   className="form-control" onChange={handleChangeParameterValue} value={this.state.parameterValue} required/>
                                <div className="invalid-feedback" >
                                    Por favor proporciona un valor valido.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="parameterDescription" className="form-label">Descripción Parametro</label>
                                <textarea id="parameterDescription" className={this.validations.parameterDescription ? 'form-control' : 'form-control is-invalid'} placeholder="Descripcion" rows="5" onChange={handleChangeParameterDescription} value={this.state.parameterDescription} required></textarea>
                                {this.validations.parameterDescription === true &&
                                <div className="invalid-feedback" >
                                    Por favor proporciona una descripcion valida.
                                </div>
                                }
                                {this.validations.parameterDescription === false &&
                                  <div className="invalid-feedback d-block" >
                                      La descripcion debe tener entre 3 a 200 caracteres.
                                  </div>
                                }
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="dataType" className="form-label">Tipo Dato</label>
                                <select  className="form-select" value={this.state.enumDataType} onChange={handleChangeEnum} required>
                                    {Object.keys(DataType).map(key => (
                                    <option key={key} value={key}>
                                        {DataType[key]}
                                    </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="settingType" className="form-label">Tipo Configuración</label>
                                <select  className="form-select" value={this.state.settingType.id} onChange={handleChangeSettingType} >
                                    {this.state.settingTypes.map((key,i) => (
                                    <option key={i} value={key.id}>
                                        {key.name}
                                    </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-12">
                                <button type="submit"  className="btn btn-primary" >Actualizar</button>
                            </div>
                        </form>
                    </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}
export default withParams(EditSetting);