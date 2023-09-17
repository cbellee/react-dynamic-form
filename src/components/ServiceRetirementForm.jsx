import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'

const ServiceRetirementForm = () => {

    const [form, setForm] = useState({
        serviceName: "",
        dateUpdated: "",
        resourceType: "",
        summary: "",
        retirementDate: "",
        lastDateToCreate: "",
        requiredActionsTitle: "",
        whatHappens: "",
        migrationSteps: [
            { "title": "", "url": "" }
        ],
        additionalDocumentation: [
            { "title": "", "url": "" }
        ],
        notifications: [
            { "source": "", "trackingId": "", "url": "" }
        ]
    })

    const handleFormChange = (e) => {
        let temp = { ...form }
        temp[e.target.name] = e.target.value
        setForm(temp)
    }

    const handleMigrationStepChange = (e, i) => {
        let temp = { ...form }
        temp.migrationSteps[i][e.target.name] = e.target.value
        setForm(temp)
    }

    const handleDocumentChange = (e, i) => {
        let temp = { ...form }
        temp.additionalDocumentation[i][e.target.name] = e.target.value
        setForm(temp)
    }

    const handleNotificationChange = (e, i) => {
        let temp = { ...form }
        temp.notifications[i][e.target.name] = e.target.value
        setForm(temp)
    }

    const addMigrationStep = () => {
        let temp = { ...form }
        temp.migrationSteps.push({ title: '', url: '' })
        setForm(temp)
    }

    const addDocumentation = () => {
        let temp = { ...form }
        temp.additionalDocumentation.push({ title: '', url: '' })
        setForm(temp)
    }

    const addNotification = () => {
        let temp = { ...form }
        temp.notifications.push({ source: '', trackingId: '', url: '' })
        setForm(temp)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(form));
    }

    return (
        <Container className="container">
            <div className="text-center w-75 align-items-center justify-content-center text-center">
            <h3>Service Entry</h3>
                <Form onSubmit={handleSubmit} name='serviceRetirementForm'>
                    <Form.Group className="mb-3" controlId="formServiceName">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Service Name"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                name="serviceName"
                                value={form.serviceName}
                                onChange={(e) => handleFormChange(e)}
                                className="input"
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDateUpdated">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Date Updated"
                            className="mb-3"
                        >
                            <Form.Control
                                type="date"
                                name="dateUpdated"
                                value={form.dateUpdated}
                                onChange={(e) => handleFormChange(e)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    {/* Add more form fields for other properties */}
                    <Form.Group className="mb-3" controlId="formResourceType">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Resource Type"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                name="resourceType"
                                value={form.resourceType}
                                onChange={(e) => handleFormChange(e)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formResourceType">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Summary"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                name="summary"
                                value={form.summary}
                                onChange={(e) => handleFormChange(e)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRetirementDate">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Retirement Date"
                            className="mb-3"
                        >
                            <Form.Control
                                type="date"
                                name="retirementDate"
                                value={form.retirementDate}
                                onChange={(e) => handleFormChange(e)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLastDateToCreate">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Last Creation Date"
                            className="mb-3"
                        >
                            <Form.Control
                                type="date"
                                name="lastDateToCreate"
                                value={form.lastDateToCreate}
                                onChange={(e) => handleFormChange(e)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRequiredActionsTitle">
                        <h5>Required Actions</h5>
                        <hr />
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Title"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                name="requiredActionsTitle"
                                value={form.requiredActionsTitle}
                                onChange={(e) => handleFormChange(e)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formWhatHappens">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Retirement Actions"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                name="whatHappens"
                                value={form.whatHappens}
                                onChange={(e) => handleFormChange(e)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    {/* Migration Steps */}
                    <Form.Group className="mb-3" controlId="formMigrationSteps">
                        <h5>Migration Steps</h5>
                        <hr />
                        {form.migrationSteps.map((step, index) => (
                            <div key={index}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Title"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={form.migrationSteps[index].title}
                                        onChange={(e) => handleMigrationStepChange(e, index)}
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Url"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        name="url"
                                        value={form.migrationSteps[index].url}
                                        onChange={(e) => handleMigrationStepChange(e, index)}
                                    />
                                </FloatingLabel>
                            </div>
                        ))}
                        <br />
                        <Button className="add" onClick={addMigrationStep}>Add Migration Step</Button>
                    </Form.Group>
                    {/* Additional Documentation */}
                    <Form.Group className="mb-3" controlId="formAdditionalDocumentation">
                        <h5>Additional Documentation</h5>
                        <hr />
                        {form.additionalDocumentation.map((doc, index) => (
                            <div key={index}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Title"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={form.additionalDocumentation[index].title}
                                        onChange={(e) => handleDocumentChange(e, index)}
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Url"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        name="url"
                                        value={form.additionalDocumentation[index].url}
                                        onChange={(e) => handleDocumentChange(e, index)}
                                    />
                                </FloatingLabel>
                            </div>
                        ))}
                        <br />
                        <Button className="add" onClick={addDocumentation}>Add Document</Button>
                    </Form.Group>
                    {/* Notifications */}
                    <Form.Group className="mb-3" controlId="formNotifications">
                        <h5>Notifications</h5>
                        <hr />
                        {form.notifications.map((notification, index) => (
                            <div key={index}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Source"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        name="source"
                                        value={form.notifications[index].source}
                                        onChange={(e) => handleNotificationChange(e, index)}
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Tracking Id"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        name="trackingId"
                                        value={form.notifications[index].trackingId}
                                        onChange={(e) => handleNotificationChange(e, index)}
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Url"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        name="url"
                                        value={form.notifications[index].url}
                                        onChange={(e) => handleNotificationChange(e, index)}
                                    />
                                </FloatingLabel>
                            </div>
                        ))}
                        <Button className="add" onClick={addNotification}>Add Notification</Button>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSubmit">
                        <Button className="submit" type="submit">Submit JSON</Button>
                    </Form.Group>
                    
                </Form>
            </div >
        </Container>
    );
}

export default ServiceRetirementForm;