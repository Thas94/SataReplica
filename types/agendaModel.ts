
export interface AgendaResults {
    speakers:     Speaker[] | null;
    facilitators: Facilitator[] | null;
    panelMembers: PanelMember[] | null;
    agendaId:     number;
    dayId:        number;
    topic:        string;
    startTime:    string;
    endTime:      string;
}

export interface Facilitator {
    facilitatorId:   number;
    facilitatorName: string;
}

export interface PanelMember {
    panelMemberId:   number;
    panelMemberName: string;
}

export interface Speaker {
    speakerId:   number;
    speakerName: string;
}
