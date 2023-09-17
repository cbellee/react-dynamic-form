import React, { useState } from "react";

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
        let temp = {...form}
        temp.migrationSteps[i][e.target.name] = e.target.value
        setForm(temp)
    }

    const handleDocumentChange = (e, i) => {
        let temp = {...form}
        temp.additionalDocumentation[i][e.target.name] = e.target.value
        setForm(temp)
    }

    const handleNotificationChange = (e, i) => {
        let temp = {...form}
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
        console.log(form);
    }

    return (
        <div>
            <h2>Add a new entry</h2>
            <form onSubmit={handleSubmit} name='serviceRetirementForm'>
                <label>Service Name:</label>
                <input
                    id="serviceName"
                    type="text"
                    name="serviceName"
                    value={form.serviceName}
                    onChange={(e) => handleFormChange(e)}
                />
                <br />
                <label>Date Updated:</label>
                <input
                    id="dateUpdated"
                    type="date"
                    name="dateUpdated"
                    value={form.dateUpdated}
                    onChange={(e) => handleFormChange(e)}
                />
                {/* Add more form fields for other properties */}
                <br />
                <label>Resoruce Type: </label>
                <input
                    id="resourceType"
                    type="text"
                    name="resourceType"
                    value={form.resourceType}
                    onChange={(e) => handleFormChange(e)}
                />
                <br />
                <label>Summary:</label>
                <textarea
                    id="summary"
                    type="text"
                    name="summary"
                    value={form.summary}
                    onChange={(e) => handleFormChange(e)}
                />
                <br />
                <label>Retirement Date:</label>
                <input
                    id="retirementDate"
                    type="date"
                    name="retirementDate"
                    value={form.retirementDate}
                    onChange={(e) => handleFormChange(e)}
                />
                <br />
                <label>Last Date to Create:</label>
                <input
                    id="lastDateToCreate"
                    type="date"
                    name="lastDateToCreate"
                    value={form.lastDateToCreate}
                    onChange={(e) => handleFormChange(e)}
                />
                <br />
                <hr />
                <label>Required Actions</label>
                <br />
                <label>Title:</label>
                <input
                    id="requiredActionsTitle"
                    name="requiredActionsTitle"
                    type="text"
                    value={form.requiredActionsTitle}
                    onChange={(e) => handleFormChange(e)}
                />
                <br />
                {/* Migration Steps */}
                <label>Migration Steps</label> <br />
                {form.migrationSteps.map((step, index) => (
                    <div key={index}>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={form.migrationSteps[index].title}
                            onChange={(e) => handleMigrationStepChange(e, index)}
                        />
                        <label>Url:</label>
                        <input
                            type="text"
                            name="url"
                            value={form.migrationSteps[index].url}
                            onChange={(e) => handleMigrationStepChange(e, index)}
                        />
                    </div>
                ))}
                <button onClick={addMigrationStep}>Add Migration Step...</button>
                <br />
                <label>What Happens after Retirement Date: </label>
                <input
                    id="whatHappens"
                    type="text"
                    name="whatHappens"
                    value={form.whatHappens}
                    onChange={(e) => handleFormChange(e)}
                />
                <br />
                <hr />
                {/* Additional Documentation */}
                <label>Additional Documentation</label>
                {form.additionalDocumentation.map((doc, index) => (
                    <div key={index}>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={form.additionalDocumentation[index].title}
                            onChange={(e) => handleDocumentChange(e, index)}
                        />
                        <label>URL:</label>
                        <input
                            type="text"
                            name="url"
                            value={form.additionalDocumentation[index].url}
                            onChange={(e) => handleDocumentChange(e, index)}
                        />
                    </div>
                ))}
                <button onClick={addDocumentation}>Add Document</button>
                <hr />
                {/* Notifications */}
                <label>Notifications</label>
                {form.notifications.map((notification, index) => (
                    <div key={index}>
                        <label>Source:</label>
                        <input
                            type="text"
                            name="source"
                            value={form.notifications[index].source}
                            onChange={(e) => handleNotificationChange(e, index)}
                        />
                        <label>Tracking Id:</label>
                        <input
                            type="text"
                            name="trackingId"
                            value={form.notifications[index].trackingId}
                            onChange={(e) => handleNotificationChange(e, index)}
                        />
                        <label>Url:</label>
                        <input
                            type="text"
                            name="url"
                            value={form.notifications[index].url}
                            onChange={(e) => handleNotificationChange(e, index)}
                        />
                    </div>
                ))}
                <button onClick={addNotification}>Add Notification</button>
                <br />
                <hr />
                <button type="submit">Generate JSON</button>
            </form>
        </div>
    );
}

export default ServiceRetirementForm;