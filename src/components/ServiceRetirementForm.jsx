import React, { useState } from "react";
import { StyledForm, StyledInput, StyledButton, StyledAlert, StyledLabel } from './FormComponents';

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
        migrationSteps: [],
        additionalDocumentation: [],
        notifications: []
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
        <div>
            <h2>Add a new entry</h2>
            <StyledForm onSubmit={handleSubmit} name='serviceRetirementForm'>
                <StyledLabel>Service Name:</StyledLabel>
                <StyledInput
                    id="serviceName"
                    type="text"
                    name="serviceName"
                    value={form.serviceName}
                    onChange={(e) => handleFormChange(e)}
                />
                <StyledLabel>Date Updated:</StyledLabel>
                <StyledInput
                    id="dateUpdated"
                    type="date"
                    name="dateUpdated"
                    value={form.dateUpdated}
                    onChange={(e) => handleFormChange(e)}
                />
                {/* Add more form fields for other properties */}
                <StyledLabel>Resource Type: </StyledLabel>
                <StyledInput
                    id="resourceType"
                    type="text"
                    name="resourceType"
                    value={form.resourceType}
                    onChange={(e) => handleFormChange(e)}
                />
                <StyledLabel>Summary:</StyledLabel>
                <StyledInput
                    id="summary"
                    type="text"
                    name="summary"
                    value={form.summary}
                    onChange={(e) => handleFormChange(e)}
                />
                <StyledLabel>Retirement Date:</StyledLabel>
                <StyledInput
                    id="retirementDate"
                    type="date"
                    name="retirementDate"
                    value={form.retirementDate}
                    onChange={(e) => handleFormChange(e)}
                />
                <StyledLabel>Last Date to Create:</StyledLabel>
                <StyledInput
                    id="lastDateToCreate"
                    type="date"
                    name="lastDateToCreate"
                    value={form.lastDateToCreate}
                    onChange={(e) => handleFormChange(e)}
                />
                <StyledLabel>Required Actions</StyledLabel>
                <StyledLabel>Title:</StyledLabel>
                <StyledInput
                    id="requiredActionsTitle"
                    name="requiredActionsTitle"
                    type="text"
                    value={form.requiredActionsTitle}
                    onChange={(e) => handleFormChange(e)}
                />
                <StyledLabel>What Happens after Retirement Date: </StyledLabel>
                <StyledInput
                    id="whatHappens"
                    type="text"
                    name="whatHappens"
                    value={form.whatHappens}
                    onChange={(e) => handleFormChange(e)}
                />
                {/* Migration Steps */}
                <StyledLabel>Migration Steps</StyledLabel>
                {form.migrationSteps.map((step, index) => (
                    <div key={index}>
                        <StyledLabel>Title:</StyledLabel>
                        <StyledInput
                            type="text"
                            name="title"
                            value={form.migrationSteps[index].title}
                            onChange={(e) => handleMigrationStepChange(e, index)}
                        />
                        <StyledLabel>Url:</StyledLabel>
                        <StyledInput
                            type="text"
                            name="url"
                            value={form.migrationSteps[index].url}
                            onChange={(e) => handleMigrationStepChange(e, index)}
                        />
                    </div>
                ))}
                <StyledButton onClick={addMigrationStep}>Add Migration Step...</StyledButton>
                {/* Additional Documentation */}
                <StyledLabel>Additional Documentation</StyledLabel>
                {form.additionalDocumentation.map((doc, index) => (
                    <div key={index}>
                        <StyledLabel>Title:</StyledLabel>
                        <StyledInput
                            type="text"
                            name="title"
                            value={form.additionalDocumentation[index].title}
                            onChange={(e) => handleDocumentChange(e, index)}
                        />
                        <StyledLabel>URL:</StyledLabel>
                        <StyledInput
                            type="text"
                            name="url"
                            value={form.additionalDocumentation[index].url}
                            onChange={(e) => handleDocumentChange(e, index)}
                        />
                    </div>
                ))}
                <StyledButton onClick={addDocumentation}>Add Document</StyledButton>
                {/* Notifications */}
                <StyledLabel>Notifications</StyledLabel>
                {form.notifications.map((notification, index) => (
                    <div key={index}>
                        <StyledLabel>Source:</StyledLabel>
                        <StyledInput
                            type="text"
                            name="source"
                            value={form.notifications[index].source}
                            onChange={(e) => handleNotificationChange(e, index)}
                        />
                        <StyledLabel>Tracking Id:</StyledLabel>
                        <StyledInput
                            type="text"
                            name="trackingId"
                            value={form.notifications[index].trackingId}
                            onChange={(e) => handleNotificationChange(e, index)}
                        />
                        <StyledLabel>Url:</StyledLabel>
                        <StyledInput
                            type="text"
                            name="url"
                            value={form.notifications[index].url}
                            onChange={(e) => handleNotificationChange(e, index)}
                        />
                    </div>
                ))}
                <StyledButton onClick={addNotification}>Add Notification</StyledButton>
                <StyledButton type="submit">Generate JSON</StyledButton>
            </StyledForm>
        </div>
    );
}

export default ServiceRetirementForm;