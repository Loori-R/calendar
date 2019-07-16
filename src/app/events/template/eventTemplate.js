const eventTemplate = (eventName, participants, description) => `
      <p class="event_info">
        <span class="event_name">${eventName}</span>
        <span class='event_participants'>${participants}</span>
        <span class='event_description'>${description}</span>
      </p>`;

export default eventTemplate;
