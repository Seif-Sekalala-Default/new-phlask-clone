import styles from "./AddResourceModal.module.scss";
import React, { Component } from "react";
import {
  Modal,
  Button,
  Form,
  OverlayTrigger,
  Popover,
  Accordion
} from "react-bootstrap";
import ImageUploader from "react-images-upload";
import * as firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
// eslint-disable-next-line import/no-unresolved
import ChooseResource from "./ChooseResource";
// eslint-disable-next-line import/no-unresolved
import ShareSocials from "./ShareSocials";
// eslint-disable-next-line import/no-unresolved
import AddFood from "./AddFood";
// eslint-disable-next-line import/no-unresolved
import AddBathroom from "./AddBathroom";
// eslint-disable-next-line import/no-unresolved
import AddForaging from "./AddForaging";
// eslint-disable-next-line import/no-unresolved
import AddWaterTap from "./AddWaterTap";

export class AddResourceModal extends Component {
  constructor(props) {
    super(props);
    this.onChangeFormStep = this.onChangeFormStep.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onNameChange = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAccessToTap = this.onChangeAccessToTap.bind(this);
    this.onChangeOrganization = this.onChangeOrganization.bind(this);
    this.onChangeFiltration = this.onChangeFiltration.bind(this);
    this.onChangeHandicapAccess = this.onChangeHandicapAccess.bind(this);
    this.onChangeTapServiceType = this.onChangeTapServiceType.bind(this);
    this.onChangeTapType = this.onChangeTapType.bind(this);
    this.onChangeWaterVessleNeeded = this.onChangeWaterVessleNeeded.bind(this);
    this.onChangePhlaskStatement = this.onChangePhlaskStatement.bind(this);
    this.onChangeNormsAndRules = this.onChangeNormsAndRules.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      pictures: [],
      images: [],
      name: "",
      address: "",
      website: "",
      city: "",
      description: "",
      accessToTap: "",
      organization: "",
      filtration: "",
      handicapAccessable: "",
      tapServiceType: "",
      tapType: "",
      waterVessleNeeded: "",
      phlaskStatement: "",
      normsAndRules: "",
      dbConnection: "",
      count: 0,
      show: false,
      formStep: "chooseResource"
    };
  }

  // controls which modal state to show
  // (e.g. choose resource, add water tap, social links)
  onChangeFormStep(step) {
    this.setState({ formStep: step });
  }

  onDrop(picture) {
    this.setState({
      pictures: picture
    });
  }

  submitImage(imageFile) {
    // Open a request for a new signed URL for S3 upload
    // Upload the image with a PUT request
    // Store the image URL in state.images
    const imageType = imageFile.type;
    const submitUrl = "/submit-image?type=" + imageType;

    return fetch(submitUrl)
      .then(response => response.json())
      .then(data => {
        return fetch(data.putURL, {
          method: "PUT",
          headers: {
            "Content-Type": imageFile.type
          },
          body: imageFile
        }).then(() => {
          return data.getURL;
        });
      })
      .catch(console.error);
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  onChangeWebsite(e) {
    this.setState({
      website: e.target.value
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeAccessToTap(e) {
    this.setState({
      accessToTap: e.target.value
    });
  }

  onChangeOrganization(e) {
    this.setState({
      organization: e.target.value
    });
  }

  onChangeFiltration(e) {
    this.setState({
      filtration: e.target.value
    });
  }

  onChangeHandicapAccess(e) {
    this.setState({
      handicapAccessable: e.target.value
    });
  }

  onChangeTapServiceType(e) {
    this.setState({
      tapServiceType: e.target.value
    });
  }

  onChangeTapType(e) {
    this.setState({
      tapType: e.target.value
    });
  }

  onChangeWaterVessleNeeded(e) {
    this.setState({
      waterVessleNeeded: e.target.value
    });
  }

  onChangePhlaskStatement(e) {
    this.setState({
      phlaskStatement: e.target.value
    });
  }

  onChangeNormsAndRules(e) {
    this.setState({
      normsAndRules: e.target.value
    });
  }

  connectToFirebase() {
    const prod_config = {
      apiKey: "AIzaSyA2E1tiV34Ou6CJU_wzlJtXxwATJXxi6K8",
      authDomain: "phlask-web-map-new-taps.firebaseapp.com",
      databaseURL: "https://phlask-web-map-new-taps.firebaseio.com",
      projectId: "phlask-web-map-new-taps",
      storageBucket: "phlask-web-map-new-taps.appspot.com",
      messagingSenderId: "673087230724",
      appId: "1:673087230724:web:2545788342843cccdcf651"
    };

    const beta_config = {
      apiKey: "AIzaSyA1dTfOeX5aXeHViJqiV-mT2iFUaasRcZc",
      authDomain: "phlask-web-map.firebaseapp.com",
      databaseURL: "https://phlask-web-map-beta-new.firebaseio.com/",
      projectId: "phlask-web-map",
      storageBucket: "phlask-web-map.appspot.com",
      messagingSenderId: "428394983826",
      appId: "1:428394983826:web:b81abdcfd5af5401e0514b"
    };

    const test_config = {
      apiKey: "AIzaSyA1dTfOeX5aXeHViJqiV-mT2iFUaasRcZc",
      authDomain: "phlask-web-map.firebaseapp.com",
      databaseURL: "https://phlask-web-map-test-new.firebaseio.com/",
      projectId: "phlask-web-map",
      storageBucket: "phlask-web-map.appspot.com",
      messagingSenderId: "428394983826",
      appId: "1:428394983826:web:b81abdcfd5af5401e0514b"
    };

    switch (window.location.hostname) {
      case "phlask.me":
        return firebase.initializeApp(prod_config, "new");
      case "beta.phlask.me":
        return firebase.initializeApp(beta_config, "new");
      default:
        return firebase.initializeApp(test_config, "new");
    }
  }

  getCount() {
    this.state.dbConnection
      .database()
      .ref("/")
      .once("value")
      .then(snapshot => {
        for (let item in snapshot.val()) {
          if (snapshot.val()[item].access === "WM") {
            continue;
          }
          if (snapshot.val()[item].active === "N") {
            continue;
          }
          if (snapshot.val()[item].access === "TrashAcademy") {
            continue;
          }
          this.setState((prevState, props) => ({
            count: prevState.count + 1
          }));
        }
      });
  }

  componentDidMount() {
    this.setState(
      {
        dbConnection: this.connectToFirebase()
      },
      () => {
        this.getCount();
      }
    );
  }

  onSubmit(e) {
    e.preventDefault();
    var upload_promises = [];
    // Upload images
    this.state.pictures.forEach(picture =>
      upload_promises.push(this.submitImage(picture))
    );

    Promise.all(upload_promises).then(images => {
      // All image uploads completed, loading tap record
      const newTapData = {
        images: images,
        address: this.state.address,
        city: this.state.city,
        description: this.state.description,
        access: this.state.accessToTap,
        organization: this.state.organization,
        filtration: this.state.filtration,
        handicap: this.state.handicapAccessable,
        service: this.state.tapServiceType,
        tap_type: this.state.tapType,
        vessel: this.state.waterVessleNeeded,
        statement: this.state.phlaskStatement,
        norms_rules: this.state.normsAndRules
      };

      this.state.dbConnection
        .database()
        .ref("/" + (this.state.count + 1).toString())
        .set(newTapData);
    });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          className={styles.modal}
        >
          {this.state.formStep === "chooseResource" && (
            <ChooseResource setFormStep={this.onChangeFormStep} />
          )}

          {this.state.formStep === "addWaterTap" && (
            <AddWaterTap
              prev={() => this.onChangeFormStep("chooseResource")}
              next={() => this.onChangeFormStep("shareSocials")}
              onDrop={this.onDrop}
              name={this.state.name}
              onNameChange={this.onNameChange}
              address={this.state.address}
              onAddressChange={this.onChangeAddress}
              website={this.state.website}
              onWebsiteChange={this.onChangeWebsite}
              description={this.state.description}
              onDescriptionChange={this.onChangeDescription}
              organization={this.state.organization}
              onOrganizationChange={this.onChangeOrganization}
              tapServiceType={this.state.tapServiceType}
              onTapServiceTypeChange={this.onChangeTapServiceType}
              tapType={this.state.tapType}
              onTapTypeChange={this.onChangeTapType}
              phlaskStatement={this.state.phlaskStatement}
              onPhlaskStatementChange={this.onChangePhlaskStatement}
              normsAndRules={this.state.normsAndRules}
              onNormsAndRulesChange={this.onChangeNormsAndRules}
            />
          )}

          {this.state.formStep === "addFood" && (
            <AddFood
              prev={() => this.onChangeFormStep("chooseResource")}
              next={() => this.onChangeFormStep("shareSocials")}
              onDrop={this.onDrop}
              name={this.state.name}
              onNameChange={this.onNameChange}
              address={this.state.address}
              onAddressChange={this.onChangeAddress}
              website={this.state.website}
              onWebsiteChange={this.onWebsiteChange}
              description={this.state.description}
              onDescriptionChange={this.onChangeDescription}
              organization={this.state.organization}
              onChangeOrganization={this.onChangeOrganization}
            />
          )}

          {this.state.formStep === "addBathroom" && (
            <AddBathroom
              prev={() => this.onChangeFormStep("chooseResource")}
              next={() => this.onChangeFormStep("shareSocials")}
              onDrop={this.onDrop}
              name={this.state.name}
              onNameChange={this.onNameChange}
              address={this.state.address}
              onAddressChange={this.onChangeAddress}
              website={this.state.website}
              onWebsiteChange={this.onWebsiteChange}
              description={this.state.description}
              onDescriptionChange={this.onChangeDescription}
              organization={this.state.organization}
              onChangeOrganization={this.onChangeDescription}
            />
          )}

          {this.state.formStep === "addForaging" && (
            <AddForaging
              prev={() => this.onChangeFormStep("chooseResource")}
              next={() => this.onChangeFormStep("shareSocials")}
              onDrop={this.onDrop}
              name={this.state.name}
              onNameChange={this.onNameChange}
              address={this.state.address}
              onAddressChange={this.onChangeAddress}
              website={this.state.website}
              onWebsiteChange={this.onWebsiteChange}
              description={this.state.description}
              onDescriptionChange={this.onChangeDescription}
              organization={this.state.organization}
              onChangeOrganization={this.onChangeDescription}
            />
          )}

          {this.state.formStep === "shareSocials" && <ShareSocials />}

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => console.log("form state", this.state)}
            >
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={this.handleClose}
              // onClick={() => console.log(this.state)} // this is to test if form state is being updated appropriately
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

        <button
          onClick={this.handleShow}
          className={`${isMobile ? styles.mobileAddButton : ""} ${
            styles.addButton
          }`}
        >
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </button>
      </>
    );
  }
}

export default AddResourceModal;
