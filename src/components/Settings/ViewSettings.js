import React, { Component } from 'react';
import ApiSetting from '../../services/ApiSetting';
import { Link } from 'react-router-dom';
import { GetSettingModel, DeleteSettingModel } from '../../models/Settings';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export class ViewSettings extends Component {
  static displayName = ViewSettings.name;
  constructor(props) {
    super(props);
    this.state = {
        getSettings: [GetSettingModel],
    };
  }
  async settings() {
    const api = new ApiSetting();
    const response = await api.getSettings();
    this.setState({getSettings: response.body})
  }

  async deleteSettingApi(id=Number) {
    const api = new ApiSetting();    
    let deleteSetting= DeleteSettingModel;
    deleteSetting.id = id;
    const response = await api.deleteSetting(deleteSetting);
    const MySwal = withReactContent(Swal) ;
    if(response.status == 200)
    {
        this.settings();
        return MySwal.fire({
            title: response.status,
            text: response.body.message,
            icon: 'success',
          })
    }
    else
    {
        return MySwal.fire({
            title: response.status,
            text: response.body.message,
            icon: 'error',
          })
    }
  }


  deleteSetting(id = Number, parameterName = String){
    const MySwal = withReactContent(Swal) ;
    return MySwal.fire({
        title: "¿Esta seguro que desea eliminar la configuración permanentemente?",
        text:parameterName,
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Eliminar",        
      }).then((result) =>{
        if(result.isConfirmed)
        {
           this.deleteSettingApi(id);
        }
      }
      );
  }

  async deactivateSettingApi(setting = GetSettingModel)
  {
    const api = new ApiSetting(); 
    setting.isActive = false;
    const response = await api.editSetting(setting);
    const MySwal = withReactContent(Swal) ;
    if(response.status == 200)
    {
        this.settings();
        return MySwal.fire({
            title: response.status,
            text: response.body.message,
            icon: 'success',
          })
    }
    else
    {
        return MySwal.fire({
            title: response.status,
            text: response.body.message,
            icon: 'error',
          })
    }
  }

  deactivateSetting(setting = GetSettingModel)
  {
    const MySwal = withReactContent(Swal) ;
    return MySwal.fire({
        title: "¿Esta seguro que desea desactivar la configuración?",
        text:setting.parameterName,
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Desactivar",        
      }).then((result) =>{
        if(result.isConfirmed)
        {
           this.deactivateSettingApi(setting);
        }
      }
      );
  }

  componentDidMount() {
    this.settings();
  }
  render() {
    return (
        <section id="content" className="content">
        <div className="content__header content__boxed overlapping">
            <div className="content__wrap">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="./">Configuración</a></li>
                    </ol>
                </nav>
                <h1 className="page-title mb-0 mt-2">Configuración</h1>
                <p className="lead"></p>
            </div>
        </div>
        <div className="content__boxed">
          <div className="content__wrap">
            <article className="d-md-flex gap-4">
              <div className="flex-fill">
                <section id="boxed-layout-tips" className="card mb-4">
                    <div className="card-body">
                        <div className="table-responsove">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th className="text-center">Nombre Parametro</th>
                                        <th>Valor Parametro</th>
                                        <th>Descripción Parametro</th>
                                        <th>Tipo de Dato</th>
                                        <th>Tipo Configuración</th>
                                        <th>Activo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.getSettings.map((value, index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{value.parameterName}</td>
                                                <td>{value.parameterValue}</td>
                                                <td>{value.parameterDescription}</td>
                                                <td>{value.dataType}</td>
                                                <td>{value.settingTypeId}</td>
                                                <td>{value.isActive.toString()}</td>
                                                <td>
                                                <Link className="btn-link" to={`/edit-setting/${value.id}`}>Editar</Link>
                                                </td>
                                                <td><a className="btn-link" style={{cursor: "pointer"}} onClick={() => this.deactivateSetting(value)}>Desactivar</a></td>
                                                <td><a className="btn-link" style={{cursor: "pointer"}} onClick={() => this.deleteSetting(value.id, value.parameterName)}>Eliminar</a></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <nav className="text-align-center mt-5" aria-label="Table navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link">Previous</a>
                                </li>
                                <li className="page-item active" aria-current="page">
                                    <span className="page-link">1</span>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item disabled"><a className="page-link" href="#">...</a></li>
                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
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