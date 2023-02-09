import { Component } from "react";
import { CgMathPlus } from "react-icons/cg";

import DataList from "../listItem/DataList/DataList";
import InputItem from "../listItem/item/Item";

import "./addNewItem.css";

class AddNewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      href: "",
      urlMarker: "",
      title: "",
      text: "",
      urlImg: "",
      lat: 0,
      lng: 0,

      links: [{ url: "", name: "" }],
    };
  }
  changeValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onAddItem = (e) => {
    e.preventDefault();
    this.props.onAddData({
      href: this.state.href,
      urlImgMarker: this.state.urlMarker,

      bangalore: {
        lat: +this.state.lat,
        lng: +this.state.lng,
      },
      dataPopup: {
        title: this.state.title,
        text: this.state.text,
        urlImg: this.state.urlImg,
        links: this.state.links,
      },
    });
    this.setState({
      href: "",
      urlMarker: "",
      title: "",
      text: "",
      urlImg: "",
      lat: 0,
      lng: 0,
      links: [{ url: "", name: "" }],
    });
  };

  createId = () => {
    return Math.random() * (10000 - -10000) + -10000;
  };

  getData = (value, id) => {
    if (this.state.links) {
      this.state.links.map((item) => {
        if (id === item.linkId) {
          item.url = value.url;
          item.name = value.name;
          return item;
        } else return item;
      });
    }
  };

  onAddLinks = (e) => {
    e.preventDefault();
    let newArr = this.state.links;
    let linkId = this.createId();
    newArr.push({ url: "", name: "", linkId: `${linkId}` });
    this.setState({ links: newArr });
  };
  deleteListItem = (id) => {
    this.setState(({ links }) => {
      return {
        links: links.filter((item) => item.linkId !== id),
      };
    });
  };

  render() {
    const { href, urlMarker, title, text, urlImg, lat, lng, links } =
      this.state;

    const elem = links.map((item, i) => {
      let deleteItem;
      let label = false;
      if (i < 1) {
        label = true;
      }
      if (i < 1) {
        deleteItem = false;
      } else {
        deleteItem = true;
      }
      if (!item.linkId) {
        item.linkId = `${this.createId()}`;
      }
      return (
        <DataList
          url={item.url}
          name={item.name}
          key={item.linkId}
          linkId={item.linkId}
          getData={this.getData}
          deleteItem={deleteItem}
          onDelete={this.deleteListItem}
          label={label}
        />
      );
    });

    return (
      <div className="add__item">
        <form action="">
          <ul className="list">
            <InputItem
              label="Href"
              id="href"
              name="href"
              onChangeValue={this.changeValue}
              valueProp={href}
            />
            <InputItem
              label="Url img marker"
              id="url-marker"
              name="urlMarker"
              onChangeValue={this.changeValue}
              valueProp={urlMarker}
            />
            <InputItem
              label="Title"
              id="title"
              name="title"
              onChangeValue={this.changeValue}
              valueProp={title}
            />
            <InputItem
              label="Text"
              id="text"
              name="text"
              onChangeValue={this.changeValue}
              valueProp={text}
            />
            <InputItem
              label="Url img"
              id="url-img"
              name="urlImg"
              onChangeValue={this.changeValue}
              valueProp={urlImg}
            />
            <InputItem
              label="Lat"
              id="lat"
              name="lat"
              onChangeValue={this.changeValue}
              valueProp={lat}
              type="number"
            />
            <InputItem
              label="Lng"
              id="lng"
              name="lng"
              onChangeValue={this.changeValue}
              valueProp={lng}
              type="number"
            />
            <ul className="data__list">{elem}</ul>
            <li className="buttons__block">
              <button className="add__item-button" onClick={this.onAddItem}>
                Save
              </button>
              <button className="add__list-links" onClick={this.onAddLinks}>
                <CgMathPlus />
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default AddNewItem;
